import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Rocket, Clock, DollarSign, Users, Star } from "lucide-react";

const ICO = () => {
  const currentIFO = {
    name: "DefiToken",
    symbol: "DFT",
    description: "Next-generation DeFi protocol with innovative yield farming mechanisms",
    price: "$0.25",
    totalRaise: "$2,500,000",
    raised: "$1,875,000",
    progress: 75,
    participants: "1,234",
    timeLeft: "2d 14h 32m",
    status: "Live",
    allocation: "Basic Sale"
  };

  const upcomingIFOs = [
    {
      name: "GameFi Token",
      symbol: "GFT",
      description: "Revolutionary play-to-earn gaming ecosystem",
      price: "$0.15",
      totalRaise: "$1,000,000",
      launchDate: "2024-02-15",
      status: "Upcoming"
    },
    {
      name: "MetaVerse Coin",
      symbol: "MVC",
      description: "Building the future of virtual reality experiences",
      price: "$0.30",
      totalRaise: "$3,000,000",
      launchDate: "2024-02-28",
      status: "Upcoming"
    }
  ];

  const pastIFOs = [
    {
      name: "AI Protocol",
      symbol: "AIP",
      description: "Artificial intelligence meets blockchain technology",
      price: "$0.20",
      totalRaise: "$5,000,000",
      raised: "$5,000,000",
      progress: 100,
      roi: "+285%",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Initial Coin Offerings (ICO)</h1>
          <p className="text-muted-foreground">
            Participate in token launches and get early access to promising projects
          </p>
        </div>

        {/* Live IFO */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Live ICO</h2>
          <Card className="knightsbridge-card bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{currentIFO.symbol}</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{currentIFO.name}</CardTitle>
                    <p className="text-muted-foreground">{currentIFO.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-500 text-white mb-2">
                    <Rocket className="w-4 h-4 mr-1" />
                    {currentIFO.status}
                  </Badge>
                  <div className="text-2xl font-bold text-foreground">{currentIFO.price}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{currentIFO.progress}% Complete</span>
                </div>
                <Progress value={currentIFO.progress} className="h-3" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{currentIFO.raised} raised</span>
                  <span>{currentIFO.totalRaise} total</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-card/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-muted-foreground">Time Left</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">{currentIFO.timeLeft}</div>
                </div>
                <div className="bg-card/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-muted-foreground">Participants</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">{currentIFO.participants}</div>
                </div>
                <div className="bg-card/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-muted-foreground">Your Allocation</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">{currentIFO.allocation}</div>
                </div>
              </div>

              {/* Participate Button */}
              <Button className="knightsbridge-button w-full py-6 text-lg font-semibold">
                <Rocket className="w-5 h-5 mr-2" />
                Participate in ICO
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming IFOs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Upcoming ICOs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingIFOs.map((ifo, index) => (
              <Card key={index} className="knightsbridge-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{ifo.symbol}</span>
                      </div>
                      <div>
                        <CardTitle>{ifo.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{ifo.description}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Coming Soon</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-sm text-muted-foreground">Price</div>
                      <div className="text-lg font-bold text-foreground">{ifo.price}</div>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-sm text-muted-foreground">Total Raise</div>
                      <div className="text-lg font-bold text-foreground">{ifo.totalRaise}</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Launch Date</div>
                    <div className="text-lg font-bold text-foreground">{ifo.launchDate}</div>
                  </div>
                  <Button variant="outline" className="w-full" disabled>
                    <Clock className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past IFOs */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Past ICOs</h2>
          <div className="grid grid-cols-1 gap-6">
            {pastIFOs.map((ifo, index) => (
              <Card key={index} className="knightsbridge-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{ifo.symbol}</span>
                      </div>
                      <div>
                        <CardTitle>{ifo.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{ifo.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500 text-white mb-2">
                        <Star className="w-4 h-4 mr-1" />
                        {ifo.status}
                      </Badge>
                      <div className="text-lg font-bold text-green-500">{ifo.roi} ROI</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-sm text-muted-foreground">Price</div>
                      <div className="text-lg font-bold text-foreground">{ifo.price}</div>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-sm text-muted-foreground">Total Raise</div>
                      <div className="text-lg font-bold text-foreground">{ifo.totalRaise}</div>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-sm text-muted-foreground">Raised</div>
                      <div className="text-lg font-bold text-foreground">{ifo.raised}</div>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-sm text-muted-foreground">Status</div>
                      <div className="text-lg font-bold text-green-500">Success</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ICO;