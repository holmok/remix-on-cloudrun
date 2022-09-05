import { GlobalAddress, GlobalForwardingRule, TargetHttpProxy } from '@pulumi/gcp/compute'

export function CreateGlobalForwardingRule (target: TargetHttpProxy, address: GlobalAddress): GlobalForwardingRule {
  return new GlobalForwardingRule('remix-loadbalancer-forwarding-rule', {
    ipAddress: address.address,
    ipProtocol: 'TCP',
    loadBalancingScheme: 'EXTERNAL_MANAGED',
    name: 'remix-loadbalancer-forwarding-rule',
    portRange: '80',
    project: 'holmok-remix-project',
    target: target.selfLink
  }, {
    dependsOn: [target]
  })
}
