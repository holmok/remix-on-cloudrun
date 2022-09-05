import { RegionNetworkEndpointGroup } from '@pulumi/gcp/compute'

export function CreateNetworkEndpointGroup (): RegionNetworkEndpointGroup {
  return new RegionNetworkEndpointGroup('remix-app-network-endpoint', {
    cloudRun: {
      service: 'remix-app'
    },
    project: 'holmok-remix-project',
    name: 'remix-app-network-endpoint',
    region: 'https://www.googleapis.com/compute/v1/projects/holmok-remix-project/regions/us-central1'
  })
}
