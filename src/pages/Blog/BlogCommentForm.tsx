
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface BlogCommentFormProps {
  onCommentSubmit: (name: string, email: string, text: string) => void;
}

const BlogCommentForm: React.FC<BlogCommentFormProps> = ({ onCommentSubmit }) => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !commentText.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to post a comment.",
        variant: "destructive"
      });
      return;
    }
    
    onCommentSubmit(name, email, commentText);
    
    // Reset form
    setName("");
    setEmail("");
    setCommentText("");
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl mb-8">
      <h4 className="text-lg font-semibold mb-4">Leave a comment</h4>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <Input 
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <Input 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your email (won't be published)"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium mb-1">Comment</label>
          <Textarea 
            id="comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Share your thoughts..."
            rows={4}
            required
          />
        </div>
        <Button type="submit">Post Comment</Button>
      </form>
    </div>
  );
};

export default BlogCommentForm;
