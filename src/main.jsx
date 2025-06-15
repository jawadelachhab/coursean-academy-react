
import { createRoot } from 'react-dom/client'
import { SidebarProvider } from './context/sidebarContext';
import { CoursesProvider } from './context/coursesContext';
import { CartProvider } from './context/cartContext';
import App from './App'

createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CoursesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CoursesProvider>
  </SidebarProvider>
)







