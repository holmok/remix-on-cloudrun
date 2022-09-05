import { BackendService, RegionNetworkEndpointGroup } from '@pulumi/gcp/compute'
export function CreateBackendService (neg: RegionNetworkEndpointGroup): BackendService {
  return new BackendService('remix-backend', {
    backends: [{
      group: neg.selfLink
    }],
    connectionDrainingTimeoutSec: 0,
    loadBalancingScheme: 'EXTERNAL_MANAGED',
    localityLbPolicy: 'ROUND_ROBIN',
    logConfig: {
      enable: true,
      sampleRate: 1
    },
    name: 'remix-backend',
    portName: 'http',
    protocol: 'HTTPS',
    sessionAffinity: 'NONE',
    timeoutSec: 30
  }, {
    dependsOn: [neg]
  })
}
