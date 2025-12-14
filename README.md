# Particle41 DevOps Team Challenge – SimpleTimeService

This repository contains my solution for the **Particle41 DevOps Team Challenge**.  
It demonstrates a minimal web service, containerization best practices, and cloud infrastructure deployment using Terraform on AWS.

---

## Project Overview

The project is divided into two main tasks:

### Task 1 – Application & Docker
- A minimal web service called **SimpleTimeService**
- Returns the current timestamp and client IP address
- Dockerized using best practices
- Runs as a **non-root user**
- Image published to **Docker Hub**

### Task 2 – Terraform & Cloud
- AWS infrastructure created using Terraform
- VPC with **2 public** and **2 private** subnets
- ECS Fargate cluster
- ECS service running containers in **private subnets only**
- Application Load Balancer in public subnets

---

## Repository Structure


---

## Task 1 – SimpleTimeService

### Application Behavior

When the root endpoint `/` is accessed, the application returns a JSON response:

```json
{
  "timestamp": "<current date and time>",
  "ip": "<visitor IP address>"
}


Docker Image

The application image is publicly available on Docker Hub:

🔗 Docker Hub Repository
https://hub.docker.com/r/shadab1995/devops-challenge-senior

Image name:

shadab1995/devops-challenge-senior:latest






