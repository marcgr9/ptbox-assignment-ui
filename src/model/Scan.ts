export enum ScanType {
    AMASS = "AMASS",
    THE_HARVESTER = "THE_HARVESTER",
}

export enum ScanStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
}

export interface Scan {
    id: string,
    type: ScanType
    website: string,
    status: ScanStatus,
    results: Results,
    createdAt: string,
    completedAt: string,
}

export interface Results {
    whoIs: string[],
    ips: string[],
    emails: string[],
    subdomains: string[],
}

export interface NewScanDTO {
    scanType: ScanType
    website: string,
}

export interface Scans {
    scans: Scan[],
}
