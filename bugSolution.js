```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:userId" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function Users() {
  const { userId } = useParams();
  return (
    <div>
      <h1>Users Page</h1>
      <p>User ID: {userId}</p>
      <Routes>
        <Route path=":userId/profile" element={<UserProfile userId={userId} />} />
      </Routes>
    </div>
  );
}

function UserProfile({userId}) {
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}
```