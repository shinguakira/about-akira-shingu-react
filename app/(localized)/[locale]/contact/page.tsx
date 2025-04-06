"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akira Shingu - Contact",
  description: "Contact Akira Shingu",
};

const emailAddress = "shinguakira1022@gmail.com";

export default function ContactPage({ params }: { params: { locale: string } }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const translations = {
    en: {
      title: "Contact",
      description: "Feel free to reach out to me with any questions or opportunities.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      thankYou: "Thank you for your message. I'll get back to you as soon as possible.",
      sendAnother: "Send Another Message",
      error: "Failed to send message",
      needToFixApp: "Need to fix application: Email configuration missing",
      requiredField: "This field is required",
      invalidEmail: "Please enter a valid email address"
    },
    ja: {
      title: "お問い合わせ",
      description: "ご質問やお仕事のご依頼など、お気軽にご連絡ください。",
      name: "お名前",
      email: "メールアドレス",
      message: "メッセージ",
      send: "送信",
      sending: "送信中...",
      success: "メッセージが送信されました！",
      thankYou: "メッセージをお送りいただきありがとうございます。できるだけ早くご返信いたします。",
      sendAnother: "別のメッセージを送信",
      error: "メッセージの送信に失敗しました",
      needToFixApp: "アプリケーションの修正が必要：メール設定が不足しています",
      requiredField: "この項目は必須です",
      invalidEmail: "有効なメールアドレスを入力してください"
    }
  };

  const t = translations[params.locale === 'ja' ? 'ja' : 'en'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          recipientEmail: emailAddress,
          locale: params.locale,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const error = await response.text();
        setError(error || t.error);
      }
    } catch (err) {
      setError(t.error);
      console.error("Error submitting form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-6 text-4xl font-bold">{t.title}</h1>
      <p className="mb-8 text-lg">{t.description}</p>
      
      <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
        {submitted ? (
          <div className="text-center">
            <h3 className="mb-4 text-xl font-semibold text-green-600 dark:text-green-400">
              {t.success}
            </h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              {t.thankYou}
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              variant="outline"
            >
              {t.sendAnother}
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t.name}
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            
            <div>
              <label 
                htmlFor="email" 
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t.email}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t.message}
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            
            {error && (
              <div className="rounded-md bg-red-50 p-4 dark:bg-red-900/30">
                <p className="text-sm font-semibold text-red-700 dark:text-red-400">
                  {error.includes("Need to fix application") ? (
                    <>
                      <span className="block text-lg font-bold">{t.error}</span>
                      <span className="block mt-2">{t.needToFixApp}</span>
                    </>
                  ) : (
                    error
                  )}
                </p>
              </div>
            )}
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? t.sending : t.send}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
