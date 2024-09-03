import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import GeneralInformationForm from './routes/GeneralInformationForm.jsx';
import FollowUpCallForm from './routes/FollowUpCallForm.jsx';
import MedicationCounseling from './routes/MedicationCounseling.jsx';
import LoginPage from './routes/LoginPage.jsx';
import PatientDataTable from './routes/PatientDataTable.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/followupcallform",
    element: <FollowUpCallForm />,
  },
  {
    path: "/generalinformationform",
    element: <GeneralInformationForm />,
  },
  {
    path: "/medicationalcounseling",
    element: <MedicationCounseling />,
  },
  {
    path: "/loginpage",
    element: <LoginPage />,
  },
  {
    path: "/patientdatetable",
    element: <PatientDataTable />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
