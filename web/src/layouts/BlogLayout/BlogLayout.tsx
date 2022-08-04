import { SignUpButton, SignInButton, UserButton } from '@clerk/clerk-react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { currentUser, isAuthenticated } = useAuth()
  return (
    <>
      <header>
        <div className="flex-between">
          <h1>
            <Link to={routes.home()}>Redwood Blog</Link>
          </h1>
          {isAuthenticated ? (
            <div>
              <span style={{ paddingRight: 20 }}>
                Hello {currentUser.firstName}
              </span>
              <UserButton afterSignOutUrl={window.location.href} />
            </div>
          ) : (
            <div>
              <SignInButton mode="redirect" afterSignInUrl={routes.home()} />
              <SignUpButton mode="redirect" afterSignUpUrl={routes.home()} />
            </div>
          )}
        </div>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
