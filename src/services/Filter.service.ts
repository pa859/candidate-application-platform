import { Job } from "../types";
import { convertSalaryToINR } from "../utils";

interface Specification {
  isSatisfied(value: any): boolean;
}

export class CompanyNameSpecification implements Specification {
  private companyName;

  constructor(companyName: string) {
    this.companyName = companyName;
  }

  isSatisfied(item: Job) {
    if (!this.companyName.trim()) return true;

    return (
      item.companyName
        .toLocaleLowerCase()
        .indexOf(this.companyName.toLocaleLowerCase()) !== -1
    );
  }
}

export class ExperienceSpecification implements Specification {
  private experience;

  constructor(experience: number) {
    this.experience = experience;
  }

  isSatisfied(item: Job) {
    if (item.minExp === null || this.experience === 0) return true;
    return item.minExp <= this.experience;
  }
}

export class LocationSpecification implements Specification {
  private location;

  constructor(location: string[]) {
    this.location = location;
  }

  isSatisfied(item: Job) {
    if (this.location.length === 0) return true;

    return this.location
      .map((loc) => loc.toLocaleLowerCase())
      .includes(item.location.toLocaleLowerCase());
  }
}

export class RoleSpecification implements Specification {
  private roles;

  constructor(roles: string[]) {
    this.roles = roles;
  }

  isSatisfied(item: Job) {
    if (this.roles.length === 0) return true;

    return this.roles
      .map((loc) => loc.toLocaleLowerCase())
      .includes(item.jobRole.toLocaleLowerCase());
  }
}

export class MinBasePaySpecification implements Specification {
  private minPay;

  constructor(minPay: number) {
    this.minPay = minPay;
  }

  isSatisfied(item: Job) {
    if (item.minJdSalary === null || this.minPay === 0) return true;
    return convertSalaryToINR(item.minJdSalary) >= this.minPay;
  }
}

export class AndSpecification implements Specification {
  private specs: Specification[];
  constructor(...specs: Specification[]) {
    this.specs = specs;
  }

  isSatisfied(item: Job) {
    return this.specs.every((x) => x.isSatisfied(item));
  }
}

export class JobFilter {
  static filter(items: Job[], spec: Specification) {
    return items.filter((x) => spec.isSatisfied(x));
  }
}
