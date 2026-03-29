export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-120 bg-primary-500/10 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-120 relative z-10">
        {children}
      </div>
    </section>
  );
}