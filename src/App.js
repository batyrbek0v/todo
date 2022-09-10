import UseLogin from './Apps/Auth/pages/Login/hooks/UseLogin';
import LayoutRoutes from './pages/LayoutRoutes';
import Authroutes from './pages/AuthRoutes';
import Loader from './components/Loader/Loader';


function App() {

  const { users, loading } = UseLogin()
  if (loading) return <Loader />

  return users ? <LayoutRoutes /> : <Authroutes />

}

export default App;
