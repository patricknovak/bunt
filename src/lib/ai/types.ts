export interface AIConfig {
  apiKey: string;
  model: string;
  provider: "anthropic" | "openai";
}

export interface AIMessage {
  role: "user" | "assistant";
  content: string;
}

export interface TrafficScenario {
  intersectionType: "3-leg" | "4-leg" | "roundabout";
  control: "signalized" | "stop-controlled" | "roundabout" | "uncontrolled";
  mainStreetVolume: number;
  sideStreetVolume: number;
  pedestrianVolume: "low" | "moderate" | "high";
  speedLimit: number;
  lanes: {
    mainStreet: number;
    sideStreet: number;
  };
  description: string;
}

export interface TrafficAnalysisResult {
  levelOfService: string;
  averageDelay: number;
  v_c_ratio: number;
  queueLength: number;
  recommendations: string[];
  analysis: string;
}

export interface ParkingInputs {
  landUseType: string;
  size: number;
  sizeUnit: string;
  location: string;
  transitProximity: "none" | "low" | "moderate" | "high";
  sharedParking: boolean;
  existingSupply?: number;
}

export interface ParkingResult {
  estimatedDemand: number;
  peakDemand: number;
  recommendedSupply: number;
  reductionFactors: { factor: string; reduction: number }[];
  analysis: string;
}

export interface SafetyInputs {
  roadType: string;
  speedLimit: number;
  pedestrianActivity: "low" | "moderate" | "high";
  cyclingInfrastructure: string;
  lighting: "good" | "moderate" | "poor";
  intersectionType: string;
  crashHistory: string;
  description: string;
}

export interface SafetyResult {
  riskScore: number;
  riskLevel: "low" | "moderate" | "high" | "critical";
  concerns: { concern: string; severity: string; }[];
  countermeasures: { measure: string; effectiveness: string; cost: string }[];
  analysis: string;
}

export interface TripGenInputs {
  landUseCode: string;
  landUseName: string;
  size: number;
  sizeUnit: string;
  timePeriod: "am-peak" | "pm-peak" | "daily";
  transitAccess: boolean;
  tdmMeasures: string[];
}

export interface TripGenResult {
  totalTrips: number;
  enteringTrips: number;
  exitingTrips: number;
  reductionFactors: { factor: string; reduction: number }[];
  adjustedTrips: number;
  analysis: string;
}
