import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Calendar, FileText, Users, DollarSign, Settings } from 'lucide-react';

export default function Home() {
  const features = [
    {
      name: 'Unified Journal',
      description: 'Connect your tasks, notes, and events in one central place with bidirectional linking.',
      icon: FileText,
    },
    {
      name: 'Project Management',
      description: 'Track projects, set goals, and manage your workflow with ease.',
      icon: Brain,
    },
    {
      name: 'Client CRM',
      description: 'Manage client relationships and track interactions all in one place.',
      icon: Users,
    },
    {
      name: 'Financial Tracking',
      description: 'Keep track of income, expenses, and financial goals.',
      icon: DollarSign,
    },
    {
      name: 'Smart Calendar',
      description: 'Schedule and manage your time with an integrated calendar view.',
      icon: Calendar,
    },
    {
      name: 'Customizable Workspace',
      description: 'Tailor your dashboard and workflows to fit your needs.',
      icon: Settings,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Your Life and Business Operating System
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Lab OS brings together everything you need to manage your personal and professional life in one powerful platform.
              Connect your tasks, projects, notes, and relationships in a unified workspace.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/sign-up">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#features">
                  Learn more
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A complete system for your life and business
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Lab OS combines powerful tools to help you stay organized, productive, and in control.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to take control?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Join thousands of professionals who use Lab OS to organize their life and business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/sign-up">
                  Get started for free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#">
                  Schedule a demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
