#!/bin/bash

# Change directory to backend and run server
echo "Starting Backend..."
cd backend
npm install
nohup node index.js > backend.log 2>&1 & 
BACKEND_PID=$!
cd ..

# Change directory to frontend and run React app
echo "Starting Frontend..."
cd frontend
npm install
nohup npm start > frontend.log 2>&1 &
FRONTEND_PID=$!
cd ..

# Show running PIDs
echo "Backend running in background with PID $BACKEND_PID"
echo "Frontend running in background with PID $FRONTEND_PID"
echo "Logs: backend/backend.log and frontend/frontend.log"

