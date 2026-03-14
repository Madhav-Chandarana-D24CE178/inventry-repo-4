import React, { createContext, useContext, useState } from "react";

export interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  requestPasswordReset: (email: string) => Promise<void>;
  verifyOtp: (otp: string) => Promise<void>;
  resetPassword: (newPassword: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [resetEmail, setResetEmail] = useState<string>("");

  const login = async (email: string, password: string) => {
    // Mock authentication - in production, call your backend
    if (password.length < 6) {
      throw new Error("Password too short");
    }
    const mockUser: User = {
      id: "1",
      email,
      name: email.split("@")[0],
    };
    setUser(mockUser);
  };

  const signup = async (name: string, email: string, password: string) => {
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }
    const mockUser: User = {
      id: "1",
      email,
      name,
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
    setResetEmail("");
  };

  const requestPasswordReset = async (email: string) => {
    // Mock OTP request
    setResetEmail(email);
  };

  const verifyOtp = async (otp: string) => {
    // Mock OTP verification
    if (otp.length !== 4) {
      throw new Error("Invalid OTP");
    }
  };

  const resetPassword = async (newPassword: string) => {
    if (newPassword.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }
    // Mock password reset
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    requestPasswordReset,
    verifyOtp,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
