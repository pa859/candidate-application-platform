export type FiltersState = {
  experience: string;
  companyName: string;
  location: string[];
  role: string[];
  minBasePay: string;
};

export type InitStateType = {
  filters: FiltersState;
};
