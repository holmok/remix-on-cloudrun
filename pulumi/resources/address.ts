import { GlobalAddress } from '@pulumi/gcp/compute'

export function CreateStaticAddress (): GlobalAddress {
  return new GlobalAddress('remix-loadbalancer-ip', {
    name: 'remix-loadbalancer-ip',
    addressType: 'EXTERNAL',
    ipVersion: 'IPV4'
  })
}
