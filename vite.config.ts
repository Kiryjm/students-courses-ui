import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/

export default defineConfig(({command, mode}) => {

  return {
    server: {
      port: 3000
    },
    plugins: [react()],
    // define: {
    //   BACKEND: process.env.VITE_STUDENTS_COURSES_API_URL || '',
    // },
  }
})
