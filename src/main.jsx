import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Router';
import { Bounce, ToastContainer } from "react-toastify";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
// import AuthProvider from './Providers/AuthProvider';
import './index.css'
import 'animate.css';

// const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    {/* <QueryClientProvider client={queryClient}> */}
      <HelmetProvider>
        <RouterProvider router={Router} />
        <ToastContainer
          position="top-center"
          autoClose={1500}
          theme="colored"
          transition={Bounce}
        />
      </HelmetProvider>
    {/* </QueryClientProvider> */}
    {/* </AuthProvider> */}
  </React.StrictMode>,
)
