# AI Trip Planner

## Overview

The AI Trip Planner is a web application designed to create personalized travel itineraries based on user preferences. It leverages Google Gemini AI and various APIs to provide tailored travel experiences.

## Features

User Interface:

Home Page: Welcome page with a header and a call-to-action button to get started.
Create Trip Page: Form to collect travel preferences including destination, duration, budget, and travel companions.
Authentication:

Google Authentication: Users can log in using Google Auth.
Local Storage: Stores successful authentication results locally.
Prompt Generation and AI Integration:

Prompt Generation: Generates a prompt based on user input for the AI model.
Google Gemini AI Model: Processes the prompt to create a travel itinerary.
Data Storage and Retrieval:

Firebase: Saves the AI-generated itinerary.
Google Place API and Photo API: Retrieves place names and images.
Results Display:

Itinerary Page: Displays the generated trip plan, including hotel recommendations and daily schedules.
My Trips Page: Allows users to view their saved trips.



<div style="text-align: center;"> 
 

<br />


## About the Project  :star2:
![1](https://github.com/user-attachments/assets/22b0102e-e4ab-459a-a3f2-f072bf2855ca)
![2](https://github.com/user-attachments/assets/55564162-f57f-4ba8-91ed-a604c51a438d)


![3](https://github.com/user-attachments/assets/3d648acd-0c95-4d80-a257-4f1395edade7)
![2](https://github.com/user-attachments/assets/35b35f6e-dbe2-4a3d-88a0-c14536688a4e)
![1](https://github.com/user-attachments/assets/48151eb5-770f-4d8b-8149-c28a12a6fa39) 

<br />

## System Architecture

User Flow
Home Page: User initiates trip planning by clicking "Get Started".

Create Trip Page: User inputs travel preferences (destination, duration, budget, companions).

Authentication: User logs in via Google Auth.

If authentication is successful, details are saved to local storage.

Prompt Generation: Based on user inputs, a prompt is created and sent to the Google Gemini AI Model.

AI Processing: The AI model processes the prompt and generates a personalized itinerary.

Data Storage: The generated itinerary is saved in Firebase.

API Integration:
Google Place API retrieves place names.
Google Photo API fetches corresponding images.

Results Display:
The itinerary page shows detailed plans including hotel recommendations and daily schedules.
The "My Trips" page lists all saved trips for the user.


## Technologies Used

Frontend: ReactJS, TailwindCSS
Backend: Firebase
Authentication: Google Auth
AI: Google Gemini AI Model
APIs: Google Place API, Google Photo API

## Getting Started

Clone the repository.
Install dependencies with npm install.
Set up Firebase and Google Auth.
Run the application with npm start.
## Setup .env file
### :key: Environment Variables


```js
VITE_GOOGLE_PLACES_API_KEY
VITE_GOOGLE_GEMINI_AI_API_KEY
VITE_GOOGLE_AUTH_CLIENT_ID
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.

