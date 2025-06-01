
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [inputText, setInputText] = useState('');
  const [submittedResponse, setSubmittedResponse] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      setSubmittedResponse(inputText.trim());
      setHasSubmitted(true);
      setInputText(''); // Clear the input after submission
    }
  };

  const handleReset = () => {
    setInputText('');
    setSubmittedResponse('');
    setHasSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Response Submitter</h1>
          <p className="text-gray-600">Enter your response and click submit to see it displayed</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Submit Your Response</CardTitle>
            <CardDescription>Type your message in the text box below</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Enter your response here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2">
                <Button 
                  type="submit" 
                  className="flex-1"
                  disabled={!inputText.trim()}
                >
                  Submit Response
                </Button>
                {hasSubmitted && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {hasSubmitted && (
          <Card className="shadow-lg border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Your Submitted Response</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-white rounded-lg border border-green-200">
                <p className="text-gray-800 break-words">{submittedResponse}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;
