import { BackendService, URLMap } from '@pulumi/gcp/compute'

export function CreateURLMap (service: BackendService): URLMap {
  return new URLMap('remix-loadbalancer',
    {
      defaultService: service.selfLink,
      hostRules: [{
        hosts: ['holmok.io'],
        pathMatcher: 'path-matcher-1'
      }],
      name: 'remix-loadbalancer',
      pathMatchers: [{
        defaultService: service.selfLink,
        name: 'path-matcher-1'
      }],
      project: 'holmok-remix-project'
    },
    { dependsOn: [service] }
  )
}
