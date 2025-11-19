import './App.css'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {


  return (
    <>
    <h1>Hello World</h1>
    <SignedOut>
    <SignInButton mode='modal'><button className=''>SignUp</button></SignInButton>
    </SignedOut>

    <SignedIn>
      <SignOutButton/>
    </SignedIn>

    <UserButton/> 
    </>
  )
}

export default App
