import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router.jsx'
import * as React from "react";
import AuthProviders from './Providers/AuthProviders.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />

        </div>
      </QueryClientProvider>


    </AuthProviders>



  </React.StrictMode>
)
