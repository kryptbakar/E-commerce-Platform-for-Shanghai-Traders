# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set environment variables
# Prevents Python from writing pyc files to disc
ENV PYTHONDONTWRITEBYTECODE 1
# Prevents Python from buffering stdout and stderr
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Install system dependencies
# gcc and other build tools are needed for some Python packages
# libpq-dev is required for psycopg2 to build correctly
RUN apt-get update && apt-get install -y build-essential libpq-dev

# Copy the requirements file into the container
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
# --no-cache-dir: Disables the cache which is not needed in a build context
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application's code into the container
COPY . .

# Define the command to run the application
# We use a hardcoded port to avoid conflicts with the database service
#CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]

CMD gunicorn config.wsgi:application --bind 0.0.0.0:$PORT