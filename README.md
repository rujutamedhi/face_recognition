# Face Recognition Attendance System

This mobile application allows users to mark their attendance using **Face Recognition** technology. The app is built using **React Native** for the frontend and integrates **Face Recognition**, **OCR (Optical Character Recognition)**, and **Location Verification** to ensure attendance marking only happens within the school premises.

## Features

- **Face Recognition for Attendance**: Users can register their face once, and the system will recognize them when they try to mark attendance.
- **Location Verification**: Attendance can only be marked if the user is within the school premises, using GPS.
- **OCR Integration**: OCR is used for text-based registration if needed (for example, capturing an ID or other details during registration).

## Technologies Used

- **Frontend**: React Native
- **Face Recognition**: Using libraries like `face-api.js` or an external API like AWS Rekognition, Microsoft Azure Face API, etc.
- **Location Detection**: GPS and Geofencing
- **OCR**: Optical Character Recognition for text-based registration (e.g., Tesseract.js or Google Vision API)

## Installation

### Prerequisites

- Node.js (v14 or later) installed on your machine
- React Native CLI installed on your machine
- Android/iOS Emulator or a physical mobile device for testing

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/face-recognition-attendance-system.git
cd face-recognition-attendance-system
