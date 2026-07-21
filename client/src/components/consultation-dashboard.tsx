import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  Building, 
  Calendar,
  CheckCircle,
  Clock,
  Eye,
  MessageSquare
} from "lucide-react";
import { api } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

interface ConsultationRequest {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  company?: string;
  inquiry_type: string;
  message: string;
  submitted_at: string;
  is_processed: boolean;
  processed_at?: string;
}

export default function ConsultationDashboard() {
  const [consultations, setConsultations] = useState<ConsultationRequest[]>([]);
  const [filteredConsultations, setFilteredConsultations] = useState<ConsultationRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedConsultation, setSelectedConsultation] = useState<ConsultationRequest | null>(null);
  const { toast } = useToast();

  const inquiryTypeLabels: Record<string, string> = {
    general: "General Inquiry",
    product: "Product Information",
    quote: "Quote Request",
    sample: "Sample Request",
    partnership: "Partnership/Business",
    technical: "Technical Support",
    other: "Other"
  };

  useEffect(() => {
    loadConsultations();
  }, []);

  useEffect(() => {
    filterConsultations();
  }, [consultations, searchTerm, statusFilter]);

  const loadConsultations = async () => {
    try {
      setLoading(true);
      const response = await api.consultations.list();
      if (response.success && response.data) {
        setConsultations(response.data);
      }
    } catch (error) {
      console.error('Failed to load consultations:', error);
      toast({
        title: "Error",
        description: "Failed to load consultation requests.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filterConsultations = () => {
    let filtered = consultations;

    // Filter by status
    if (statusFilter !== "all") {
      const isProcessed = statusFilter === "processed";
      filtered = filtered.filter(c => c.is_processed === isProcessed);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(c => 
        c.first_name.toLowerCase().includes(term) ||
        c.last_name.toLowerCase().includes(term) ||
        c.email.toLowerCase().includes(term) ||
        c.company?.toLowerCase().includes(term) ||
        c.message.toLowerCase().includes(term)
      );
    }

    setFilteredConsultations(filtered);
  };

  const markAsProcessed = async (id: number) => {
    try {
      const response = await api.consultations.markProcessed(id);
      if (response.success) {
        toast({
          title: "Success",
          description: "Consultation marked as processed.",
        });
        loadConsultations(); // Reload the list
      }
    } catch (error) {
      console.error('Failed to mark as processed:', error);
      toast({
        title: "Error",
        description: "Failed to update consultation status.",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (isProcessed: boolean) => {
    return isProcessed ? (
      <Badge className="bg-green-500 text-white">
        <CheckCircle className="w-3 h-3 mr-1" />
        Processed
      </Badge>
    ) : (
      <Badge className="bg-yellow-500 text-white">
        <Clock className="w-3 h-3 mr-1" />
        Pending
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ffe066] mx-auto mb-4"></div>
          <p className="text-[#fbe3c7]">Loading consultations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#ffe066]">Consultation Requests</h2>
          <p className="text-[#fbe3c7]">Manage and respond to customer inquiries</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-[#ffe066] text-black">
            {filteredConsultations.length} requests
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <Card className="bg-[#181818] border-[#404040]">
        <CardHeader>
          <CardTitle className="text-[#ffe066]">Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="search" className="text-[#fbe3c7]">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-[#fbe3c7]" />
                <Input
                  id="search"
                  placeholder="Search by name, email, company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-[#2a2a2a] border-[#404040] text-white"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="status" className="text-[#fbe3c7]">Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="bg-[#2a2a2a] border-[#404040] text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#2a2a2a] border-[#404040]">
                  <SelectItem value="all" className="text-white">All Requests</SelectItem>
                  <SelectItem value="pending" className="text-white">Pending</SelectItem>
                  <SelectItem value="processed" className="text-white">Processed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button 
                onClick={loadConsultations}
                className="bg-[#ffe066] text-black hover:bg-[#fbe3c7]"
              >
                Refresh
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Consultations Table */}
      <Card className="bg-[#181818] border-[#404040]">
        <CardHeader>
          <CardTitle className="text-[#ffe066]">All Requests</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredConsultations.length === 0 ? (
            <div className="text-center py-8">
              <MessageSquare className="w-12 h-12 text-[#404040] mx-auto mb-4" />
              <p className="text-[#fbe3c7]">No consultation requests found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-[#404040]">
                    <TableHead className="text-[#fbe3c7]">Name</TableHead>
                    <TableHead className="text-[#fbe3c7]">Contact</TableHead>
                    <TableHead className="text-[#fbe3c7]">Type</TableHead>
                    <TableHead className="text-[#fbe3c7]">Status</TableHead>
                    <TableHead className="text-[#fbe3c7]">Date</TableHead>
                    <TableHead className="text-[#fbe3c7]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredConsultations.map((consultation) => (
                    <TableRow key={consultation.id} className="border-[#404040] hover:bg-[#2a2a2a]">
                      <TableCell>
                        <div>
                          <div className="font-medium text-white">
                            {consultation.first_name} {consultation.last_name}
                          </div>
                          {consultation.company && (
                            <div className="text-sm text-[#fbe3c7] flex items-center">
                              <Building className="w-3 h-3 mr-1" />
                              {consultation.company}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm text-[#fbe3c7] flex items-center">
                            <Mail className="w-3 h-3 mr-1" />
                            {consultation.email}
                          </div>
                          {consultation.phone && (
                            <div className="text-sm text-[#fbe3c7] flex items-center">
                              <Phone className="w-3 h-3 mr-1" />
                              {consultation.phone}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-[#404040] text-[#fbe3c7]">
                          {inquiryTypeLabels[consultation.inquiry_type] || consultation.inquiry_type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(consultation.is_processed)}
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-[#fbe3c7] flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(consultation.submitted_at)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedConsultation(consultation)}
                            className="border-[#404040] text-[#fbe3c7] hover:bg-[#2a2a2a]"
                          >
                            <Eye className="w-3 h-3" />
                          </Button>
                          {!consultation.is_processed && (
                            <Button
                              size="sm"
                              onClick={() => markAsProcessed(consultation.id)}
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              <CheckCircle className="w-3 h-3" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Consultation Detail Modal */}
      {selectedConsultation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="bg-[#181818] border-[#404040] max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-[#ffe066]">
                  Consultation Details
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedConsultation(null)}
                  className="text-[#fbe3c7] hover:text-white"
                >
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-[#fbe3c7] text-sm">Name</Label>
                  <p className="text-white font-medium">
                    {selectedConsultation.first_name} {selectedConsultation.last_name}
                  </p>
                </div>
                <div>
                  <Label className="text-[#fbe3c7] text-sm">Email</Label>
                  <p className="text-white">{selectedConsultation.email}</p>
                </div>
                <div>
                  <Label className="text-[#fbe3c7] text-sm">Phone</Label>
                  <p className="text-white">{selectedConsultation.phone || 'Not provided'}</p>
                </div>
                <div>
                  <Label className="text-[#fbe3c7] text-sm">Company</Label>
                  <p className="text-white">{selectedConsultation.company || 'Not provided'}</p>
                </div>
                <div>
                  <Label className="text-[#fbe3c7] text-sm">Inquiry Type</Label>
                  <Badge className="bg-[#ffe066] text-black">
                    {inquiryTypeLabels[selectedConsultation.inquiry_type]}
                  </Badge>
                </div>
                <div>
                  <Label className="text-[#fbe3c7] text-sm">Status</Label>
                  {getStatusBadge(selectedConsultation.is_processed)}
                </div>
              </div>
              
              <div>
                <Label className="text-[#fbe3c7] text-sm">Message</Label>
                <div className="bg-[#2a2a2a] p-3 rounded border border-[#404040] mt-1">
                  <p className="text-white whitespace-pre-wrap">{selectedConsultation.message}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-[#fbe3c7] text-sm">Submitted</Label>
                  <p className="text-white text-sm">{formatDate(selectedConsultation.submitted_at)}</p>
                </div>
                {selectedConsultation.processed_at && (
                  <div>
                    <Label className="text-[#fbe3c7] text-sm">Processed</Label>
                    <p className="text-white text-sm">{formatDate(selectedConsultation.processed_at)}</p>
                  </div>
                )}
              </div>
              
              <div className="flex justify-end gap-2 pt-4 border-t border-[#404040]">
                <Button
                  variant="outline"
                  onClick={() => setSelectedConsultation(null)}
                  className="border-[#404040] text-[#fbe3c7]"
                >
                  Close
                </Button>
                {!selectedConsultation.is_processed && (
                  <Button
                    onClick={() => {
                      markAsProcessed(selectedConsultation.id);
                      setSelectedConsultation(null);
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Mark as Processed
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
} 