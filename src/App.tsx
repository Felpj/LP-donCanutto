import { ChakraProvider } from '@chakra-ui/react'
import Header from './pages/header'
import SubscriptionSection from './pages/SubscriptionSection'
import VideoSection from './pages/VideoSection'
import TestimonialsSection from './pages/TestimonialsSection'
import CourseSection from './pages/CourseSection'
import Footer from './pages/Footer'

function App() {

  return (
    <ChakraProvider>
      <Header/>
      <SubscriptionSection/>
      <VideoSection/>
      <TestimonialsSection/>
      <CourseSection/>
      <Footer/>
    </ChakraProvider>
  )
}

export default App
