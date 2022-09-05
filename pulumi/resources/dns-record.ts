import { GlobalAddress } from '@pulumi/gcp/compute'
import { Record, Zone } from '@pulumi/cloudflare'

export function CreateNewDNSRecord (address: GlobalAddress, zone: Zone): Record {
  return new Record('holmok.io', {
    name: 'holmok.io',
    proxied: true,
    ttl: 1,
    type: 'A',
    value: address.address,
    zoneId: zone.id
  }, { dependsOn: [address, zone] })
}

export function CreateNewDNSZone (): Zone {
  return new Zone('holmok.io-zone', {
    accountId: '02c6a1da49c751ba9b9338b552ea61d3',
    plan: 'free',
    zone: 'holmok.io'
  })
}
