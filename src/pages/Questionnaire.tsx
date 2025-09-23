import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Question {
  id: number;
  question: string;
  options: Array<{
    text: string;
    value: string;
    points: number;
  }>;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What best describes your current onshore team structure?",
    options: [
      { text: "Fully remote with no clear systems", value: "no-systems", points: 0 },
      { text: "Mixed remote/office with some systems", value: "some-systems", points: 1 },
      { text: "Well-structured hybrid or clear office setup", value: "well-structured", points: 2 }
    ]
  },
  {
    id: 2,
    question: "How many key roles are you currently struggling to fill?",
    options: [
      { text: "5+ critical roles unfilled for months", value: "many-unfilled", points: 0 },
      { text: "2-4 roles with ongoing challenges", value: "some-challenges", points: 1 },
      { text: "1-2 roles or generally well-staffed", value: "well-staffed", points: 2 }
    ]
  },
  {
    id: 3,
    question: "What is your experience with offshore teams?",
    options: [
      { text: "Tried before but it failed", value: "failed", points: 0 },
      { text: "Mixed results with lessons learned", value: "mixed-results", points: 1 },
      { text: "Previous success or strong referrals", value: "successful", points: 2 }
    ]
  },
  {
    id: 4,
    question: "How confident are you that your team will hit this year's targets?",
    options: [
      { text: "Not confident - significant concerns", value: "not-confident", points: 0 },
      { text: "Somewhat confident with reservations", value: "somewhat-confident", points: 1 },
      { text: "Very confident in team capabilities", value: "very-confident", points: 2 }
    ]
  },
  {
    id: 5,
    question: "Do you know the specific cost of your talent shortages?",
    options: [
      { text: "Unknown - not measured or tracked", value: "unknown", points: 0 },
      { text: "Rough estimate of impact", value: "rough-estimate", points: 1 },
      { text: "Clearly quantified and measured", value: "quantified", points: 2 }
    ]
  },
  {
    id: 6,
    question: "How much leadership time is wasted on admin vs strategic work?",
    options: [
      { text: "Mostly admin - little strategic time", value: "mostly-admin", points: 0 },
      { text: "50/50 mix of admin and strategic", value: "balanced", points: 1 },
      { text: "Mostly strategic with minimal admin", value: "mostly-strategic", points: 2 }
    ]
  },
  {
    id: 7,
    question: "Are your key processes documented with clear SOPs?",
    options: [
      { text: "No - mostly tribal knowledge", value: "tribal", points: 0 },
      { text: "Partially documented", value: "partial", points: 1 },
      { text: "Yes - well documented and updated", value: "documented", points: 2 }
    ]
  },
  {
    id: 8,
    question: "What percentage of your processes are manual vs software-driven?",
    options: [
      { text: "70%+ manual processes", value: "manual", points: 0 },
      { text: "50/50 manual and software", value: "mixed", points: 1 },
      { text: "70%+ software-driven", value: "software", points: 2 }
    ]
  },
  {
    id: 9,
    question: "Do you use credible software tools for core business functions?",
    options: [
      { text: "Minimal - mostly spreadsheets/basic tools", value: "minimal", points: 0 },
      { text: "Some specialized tools in key areas", value: "some-tools", points: 1 },
      { text: "Comprehensive suite of professional tools", value: "comprehensive", points: 2 }
    ]
  },
  {
    id: 10,
    question: "How structured is your training and onboarding program?",
    options: [
      { text: "Ad-hoc - learn as you go approach", value: "adhoc", points: 0 },
      { text: "Partially structured with some materials", value: "partial-structure", points: 1 },
      { text: "Fully structured with clear curriculum", value: "structured", points: 2 }
    ]
  },
  {
    id: 11,
    question: "What's your current AI adoption strategy?",
    options: [
      { text: "No clear strategy or adoption", value: "no-strategy", points: 0 },
      { text: "Ad-hoc usage without strategy", value: "adhoc-usage", points: 1 },
      { text: "Clear roadmap and implementation plan", value: "clear-roadmap", points: 2 }
    ]
  },
  {
    id: 12,
    question: "Are your key leaders aligned on offshore team expansion?",
    options: [
      { text: "Resistant - concerns about offshore", value: "resistant", points: 0 },
      { text: "Mixed - some support, some resistance", value: "mixed-support", points: 1 },
      { text: "Fully aligned and enthusiastic", value: "aligned", points: 2 }
    ]
  },
  {
    id: 13,
    question: "Do you maintain consistent weekly 1:1s with your team?",
    options: [
      { text: "No - irregular or no 1:1 meetings", value: "no-meetings", points: 0 },
      { text: "Sometimes - when time permits", value: "sometimes", points: 1 },
      { text: "Yes - consistently scheduled and valued", value: "consistent", points: 2 }
    ]
  },
  {
    id: 14,
    question: "What percentage of your team clearly knows their goals?",
    options: [
      { text: "Less than 25% - unclear goals", value: "unclear", points: 0 },
      { text: "25-75% - mixed clarity", value: "mixed-clarity", points: 1 },
      { text: "More than 75% - very clear goals", value: "clear-goals", points: 2 }
    ]
  },
  {
    id: 15,
    question: "How do you manage and track team performance?",
    options: [
      { text: "No formal system - gut feeling based", value: "no-system", points: 0 },
      { text: "Basic tracking with some structure", value: "basic-tracking", points: 1 },
      { text: "Formal OKR or structured performance rhythm", value: "formal-system", points: 2 }
    ]
  },
  {
    id: 16,
    question: "How would you rate overall team engagement and morale?",
    options: [
      { text: "Low - concerning turnover/satisfaction", value: "low", points: 0 },
      { text: "Moderate - room for improvement", value: "moderate", points: 1 },
      { text: "High - strong culture and satisfaction", value: "high", points: 2 }
    ]
  },
  {
    id: 17,
    question: "How aware are you of margin squeeze in your business?",
    options: [
      { text: "Don't really know - no clear tracking", value: "unknown-margins", points: 0 },
      { text: "Vague sense but not quantified", value: "vague-sense", points: 1 },
      { text: "Clear understanding and tracking", value: "clear-tracking", points: 2 }
    ]
  },
  {
    id: 18,
    question: "Do you know your extra profit potential with optimized teams?",
    options: [
      { text: "Vague sense of possible improvements", value: "vague-potential", points: 0 },
      { text: "Ballpark estimate of potential", value: "ballpark", points: 1 },
      { text: "Clearly quantified and modeled", value: "quantified-potential", points: 2 }
    ]
  },
  {
    id: 19,
    question: "How much time do leaders spend on strategic vs operational tasks?",
    options: [
      { text: "Mostly operational - limited strategic time", value: "operational", points: 0 },
      { text: "Balanced operational and strategic time", value: "balanced-time", points: 1 },
      { text: "Mostly strategic with clear delegation", value: "strategic", points: 2 }
    ]
  },
  {
    id: 20,
    question: "What's your current view on offshore team implementation?",
    options: [
      { text: "Resistant - prefer to avoid offshore", value: "avoid-offshore", points: 0 },
      { text: "Cautiously optimistic with concerns", value: "cautious", points: 1 },
      { text: "Ready and committed to making it work", value: "committed", points: 2 }
    ]
  },
  {
    id: 21,
    question: "What's your top priority: cost savings, culture fit, or scale?",
    options: [
      { text: "Unclear - want everything equally", value: "unclear-priority", points: 0 },
      { text: "Conflicted between multiple priorities", value: "conflicted", points: 1 },
      { text: "Crystal clear on primary objective", value: "clear-priority", points: 2 }
    ]
  },
  {
    id: 22,
    question: "What's your timeline for implementing offshore teams?",
    options: [
      { text: "Someday - no specific timeline", value: "someday", points: 0 },
      { text: "Within the next 12 months", value: "twelve-months", points: 1 },
      { text: "Ready to start immediately", value: "immediately", points: 2 }
    ]
  }
];

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNextQuestion = () => {
    // Save the answer
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: selectedAnswer
    }));

    if (isLastQuestion) {
      // Calculate and show results
      setShowResults(true);
    } else {
      // Move to next question
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer("");
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          totalScore += option.points;
        }
      }
    });
    return totalScore;
  };

  const getScoreCategory = (score: number) => {
    const maxScore = questions.length * 2; // 44 points max
    const percentage = (score / maxScore) * 100;
    
    if (percentage >= 80) return { category: "Excellent", color: "text-green-600", description: "You're ready for offshore success!" };
    if (percentage >= 60) return { category: "Good", color: "text-blue-600", description: "You're on the right track with some areas to improve." };
    if (percentage >= 40) return { category: "Fair", color: "text-yellow-600", description: "Significant preparation needed before going offshore." };
    return { category: "Needs Improvement", color: "text-red-600", description: "Focus on building foundational systems first." };
  };

  if (showResults) {
    const finalScore = calculateScore();
    const maxScore = questions.length * 2;
    const { category, color, description } = getScoreCategory(finalScore);

    return (
      <div className="min-h-screen bg-muted/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-primary mb-4">
                Your Offshore Readiness Score
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Based on your responses, here's your personalized assessment.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="px-8 pb-8 text-center">
              <div className="space-y-6">
                <div className="text-6xl font-bold text-primary mb-4">
                  {finalScore}/{maxScore}
                </div>
                
                <div className={`text-2xl font-bold ${color} mb-4`}>
                  {category}
                </div>
                
                <p className="text-lg text-muted-foreground mb-8">
                  {description}
                </p>
                
                <Button 
                  size="lg" 
                  variant="cta"
                  className="text-lg py-6 h-auto font-bold px-12"
                  onClick={() => window.location.href = '/'}
                >
                  Get Your Detailed Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-elegant">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-primary mb-4">
              Offshore Readiness Diagnostic
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Question {currentQuestionIndex + 1} of {questions.length} (2 points)
            </CardDescription>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-xl font-bold text-primary mb-8">
                  {currentQuestion.question}
                </h2>
                
                <RadioGroup 
                  value={selectedAnswer} 
                  onValueChange={handleAnswerSelect}
                  className="space-y-4"
                >
                  {currentQuestion.options.map((option) => (
                    <div 
                      key={option.value}
                      className={`flex items-center space-x-3 p-4 rounded-full border-2 transition-colors cursor-pointer ${
                        selectedAnswer === option.value
                          ? "border-accent bg-accent text-accent-foreground" 
                          : "border-input hover:border-accent/50"
                      }`}
                    >
                      <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                      <Label 
                        htmlFor={option.value}
                        className="flex-1 text-center font-medium cursor-pointer"
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <div className="pt-8">
                <Button 
                  onClick={handleNextQuestion}
                  disabled={!selectedAnswer}
                  size="lg" 
                  variant="cta"
                  className="w-full text-lg py-6 h-auto font-bold"
                >
                  {isLastQuestion ? "Calculate My Score" : "Next Question"}
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