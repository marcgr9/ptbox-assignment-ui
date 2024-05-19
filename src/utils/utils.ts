import {Scan} from "../model/Scan";

export function areScanResultsEmpty(scan: Scan) {
    return Object.values(scan.results).every(array => array.length === 0);
}
