"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import "./Login.css"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleLogin() {
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || "Login failed")
        return
      }

      router.push(data.role === "admin" ? "/admin" : "/dashboard")

    } catch {
      setError("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">

        <p className="login-back">← Back</p>

        <h1 className="login-title">Hi, welcome back</h1>
        <p className="login-subtitle">
          Enter your email and password to continue to ApprenticeHub.
        </p>

        {error && <p className="login-error">{error}</p>}

        <div className="login-form">

          <label className="login-label">EMAIL ADDRESS</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />

          <label className="login-label">PASSWORD</label>
          <div className="password-wrapper">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <span className="eye-icon">👁</span>
          </div>

          <p className="forgot-password">Forgot password?</p>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="login-button"
          >
            {loading ? "Logging in..." : "→ Log in"}
          </button>

          <p className="signup-text">
            Don’t have an account? <span>Create a free account</span>
          </p>
        </div>
      </div>
    </div>
  )
}