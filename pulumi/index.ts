import { CreateService } from './resources/service'
import { CreateBackendService } from './resources/backend-service'
import { CreateNetworkEndpointGroup } from './resources/network-endpoint-group'
import { CreateGlobalForwardingRule } from './resources/global-forwarding-rule'
import { CreateTargetHttpProxy } from './resources/http-target-proxy'
import { CreateURLMap } from './resources/url-map'
import { CreateStaticAddress } from './resources/address'
import { CreateNewDNSRecord, CreateNewDNSZone } from './resources/dns-record'

const neg = CreateNetworkEndpointGroup()
const service = CreateService()
const backendService = CreateBackendService(neg)
const urlMap = CreateURLMap(backendService)
const targetHttpProxy = CreateTargetHttpProxy(urlMap)
const address = CreateStaticAddress()
const forwardingRule = CreateGlobalForwardingRule(targetHttpProxy, address)
const zone = CreateNewDNSZone()
const record = CreateNewDNSRecord(address, zone)

export const output = {
  zone: { id: zone.id, name: zone.zone },
  record: { id: record.id, name: record.name },
  urlMap: { urn: urlMap.urn },
  targetHttpProxy: { urn: targetHttpProxy.urn },
  networkEndpointGroup: { urn: neg.urn },
  service: { urn: service.urn },
  backendService: { urn: backendService.urn },
  forwardingRule: { urn: forwardingRule.urn }
}
