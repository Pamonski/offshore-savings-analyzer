import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Questionnaire = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleCalculateScore = () => {
    // TODO: Handle score calculation logic
    console.log("Calculate score with answer:", selectedAnswer);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-soft">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-primary mb-4">
              Offshore Readiness Diagnostic
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Answer the questions as they appear to build your report.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-xl font-bold text-primary mb-8">
                  What best describes your current onshore team structure?
                </h2>
                
                <RadioGroup 
                  value={selectedAnswer} 
                  onValueChange={handleAnswerSelect}
                  className="space-y-4"
                >
                  <div className={`flex items-center space-x-3 p-4 rounded-full border-2 transition-colors cursor-pointer ${
                    selectedAnswer === "no-systems" 
                      ? "border-accent bg-accent text-accent-foreground" 
                      : "border-input hover:border-accent/50"
                  }`}>
                    <RadioGroupItem value="no-systems" id="no-systems" className="sr-only" />
                    <Label 
                      htmlFor="no-systems" 
                      className="flex-1 text-center font-medium cursor-pointer"
                    >
                      Fully remote with no clear systems
                    </Label>
                  </div>
                  
                  <div className={`flex items-center space-x-3 p-4 rounded-full border-2 transition-colors cursor-pointer ${
                    selectedAnswer === "some-systems" 
                      ? "border-accent bg-accent text-accent-foreground" 
                      : "border-input hover:border-accent/50"
                  }`}>
                    <RadioGroupItem value="some-systems" id="some-systems" className="sr-only" />
                    <Label 
                      htmlFor="some-systems" 
                      className="flex-1 text-center font-medium cursor-pointer"
                    >
                      Mixed remote/office with some systems
                    </Label>
                  </div>
                  
                  <div className={`flex items-center space-x-3 p-4 rounded-full border-2 transition-colors cursor-pointer ${
                    selectedAnswer === "well-structured" 
                      ? "border-accent bg-accent text-accent-foreground" 
                      : "border-input hover:border-accent/50"
                  }`}>
                    <RadioGroupItem value="well-structured" id="well-structured" className="sr-only" />
                    <Label 
                      htmlFor="well-structured" 
                      className="flex-1 text-center font-medium cursor-pointer"
                    >
                      Well-structured hybrid or clear office setup
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="pt-8">
                <Button 
                  onClick={handleCalculateScore}
                  disabled={!selectedAnswer}
                  size="lg" 
                  variant="cta"
                  className="w-full text-lg py-6 h-auto font-bold"
                >
                  Calculate My Score
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Questionnaire;