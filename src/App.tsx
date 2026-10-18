import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import ProjectDetail from './pages/ProjectDetail/ProjectDetail'
import Experience from './pages/Experience/Experience'
import Tools from './pages/Tools/Tools'
import Blog from './pages/Blog/Blog'
import BlogPost from './pages/BlogPost/BlogPost'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/projects/:slug" element={<Layout><ProjectDetail /></Layout>} />
      <Route path="/experience" element={<Layout><Experience /></Layout>} />
      <Route path="/tools" element={<Layout><Tools /></Layout>} />
      <Route path="/blog" element={<Layout><Blog /></Layout>} />
      <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
      <Route
        path="*"
        element={
          <Layout hideProfile>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
