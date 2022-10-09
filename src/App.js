import Auth from './components/Auth';
import "bootstrap/dist/css/bootstrap.min.css"
import { supabase } from './lib/api';

function App() {
  const user = supabase.auth.user()
  return (
    <div>
      {user?user.email:"not user"}
    </div>
  );
}

export default App;
