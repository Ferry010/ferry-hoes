const TypingIndicator = () => (
  <div className="flex justify-start">
    <div className="max-w-[85%] space-y-1">
      <span className="text-[11px] text-muted-foreground font-medium ml-1">
        Ferry
      </span>
      <div className="rounded-2xl rounded-bl-md px-4 py-3 bg-secondary inline-flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-[bounce_1.2s_ease-in-out_infinite]" />
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-[bounce_1.2s_ease-in-out_0.15s_infinite]" />
        <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-[bounce_1.2s_ease-in-out_0.3s_infinite]" />
      </div>
    </div>
  </div>
);

export default TypingIndicator;
