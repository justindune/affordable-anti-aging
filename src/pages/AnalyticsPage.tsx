import Analytics from '@/components/Analytics';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { BarChart, TrendingUp, TrendingDown, User, Clock, MessageSquare } from "lucide-react";

interface Metric {
  id: string;
  title: string;
  value: number | string;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
  description: string;
}

const metrics: Metric[] = [
  {
    id: 'conversion',
    title: 'Conversion Rate',
    value: '85%',
    trend: 'up',
    icon: <TrendingUp className="h-4 w-4 text-green-500" />,
    description: 'Up 12% from last month'
  },
  {
    id: 'avg_booking_time',
    title: 'Avg. Booking Time',
    value: '2.5 mins',
    trend: 'down',
    icon: <Clock className="h-4 w-4 text-blue-500" />,
    description: 'Down 30% from last month'
  },
  {
    id: 'customer_satisfaction',
    title: 'Customer Satisfaction',
    value: '4.8/5',
    trend: 'up',
    icon: <User className="h-4 w-4 text-yellow-500" />,
    description: 'Based on 2,456 reviews'
  },
  {
    id: 'conversation_quality',
    title: 'Conversation Quality',
    value: '92%',
    trend: 'up',
    icon: <MessageSquare className="h-4 w-4 text-purple-500" />,
    description: 'High quality conversations'
  }
];

interface DataSource {
  id: string;
  name: string;
  enabled: boolean;
  description: string;
  impact: string;
}

const dataSources: DataSource[] = [
  {
    id: 'call_transcripts',
    name: 'Call Transcripts',
    enabled: true,
    description: 'Voice conversation data',
    impact: 'Improves booking accuracy'
  },
  {
    id: 'appointment_data',
    name: 'Appointment Data',
    enabled: true,
    description: 'Booking history and patterns',
    impact: 'Enhances scheduling efficiency'
  },
  {
    id: 'customer_feedback',
    name: 'Customer Feedback',
    enabled: false,
    description: 'Post-appointment reviews',
    impact: 'Improves agent performance'
  },
  {
    id: 'agent_performance',
    name: 'Agent Performance',
    enabled: true,
    description: 'AI agent metrics',
    impact: 'Optimizes conversation flow'
  }
];

export function AnalyticsPage() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const toggleDataSource = (id: string) => {
    const updatedSources = dataSources.map(source =>
      source.id === id ? { ...source, enabled: !source.enabled } : source
    );
    // Save to local storage or API
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Business Intelligence Dashboard</CardTitle>
            <Button variant="outline" size="sm">
              Export Data
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="testing">Testing Metrics</TabsTrigger>
              <TabsTrigger value="opportunities">Growth Opportunities</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$19,000+</div>
                    <p className="text-xs text-muted-foreground">
                      With 3 Tests/Day
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Patient Conversion</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4 text-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h16.5m-16.5-8.25h12.75c.621 0 1.125-.504 1.125-1.125V4.875C4.875 3.787 4.032 3 3.15 3H3.75c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">70-80%</div>
                    <p className="text-xs text-muted-foreground">
                      Eligibility Rate
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Insurance Reimbursement</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4 text-yellow-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$300+</div>
                    <p className="text-xs text-muted-foreground">
                      Per Test
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4 text-purple-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h16.5m-16.5-8.25h12.75c.621 0 1.125-.504 1.125-1.125V4.875C4.875 3.787 4.032 3 3.15 3H3.75c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12% MoM</div>
                    <p className="text-xs text-muted-foreground">
                      Monthly Growth
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Data Sources</h3>
                <div className="space-y-2">
                  {dataSources.map((source) => (
                    <div key={source.id} className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{source.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {source.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch
                          id={source.id}
                          checked={source.enabled}
                          onCheckedChange={() => toggleDataSource(source.id)}
                        />
                        <p className="text-sm text-muted-foreground">
                          {source.impact}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="revenue" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Monthly Revenue</h4>
                        <span className="text-sm text-muted-foreground">$19,000+</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Insurance Reimbursement</h4>
                        <span className="text-sm text-muted-foreground">$300+ per test</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Patient Volume</h4>
                        <span className="text-sm text-muted-foreground">70-80% eligibility</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Profit Margins</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Gross Margin</h4>
                        <span className="text-sm text-muted-foreground">65%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Net Margin</h4>
                        <span className="text-sm text-muted-foreground">50%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">ROI</h4>
                        <span className="text-sm text-muted-foreground">12x</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="testing" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Testing Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Test Volume</h4>
                        <span className="text-sm text-muted-foreground">300+ monthly</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Turnaround Time</h4>
                        <span className="text-sm text-muted-foreground">24-48 hours</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Accuracy Rate</h4>
                        <span className="text-sm text-muted-foreground">99.5%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Test Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Glycation Tests</h4>
                        <span className="text-sm text-muted-foreground">45%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Functional Age Tests</h4>
                        <span className="text-sm text-muted-foreground">35%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Endothelial Tests</h4>
                        <span className="text-sm text-muted-foreground">20%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="opportunities" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Growth Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6 text-primary"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold">Expand Testing Services</h3>
                        <p className="text-sm text-muted-foreground">
                          Add new non-invasive testing options to increase revenue per patient
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6 text-primary"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold">Enhance Marketing Strategy</h3>
                        <p className="text-sm text-muted-foreground">
                          Implement targeted digital advertising to reach more potential patients
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6 text-primary"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold">Optimize Staffing</h3>
                        <p className="text-sm text-muted-foreground">
                          Implement automated scheduling to maximize testing capacity
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsPage;