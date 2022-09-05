import { URLMap, TargetHttpProxy } from '@pulumi/gcp/compute'

export function CreateTargetHttpProxy (urlMap: URLMap): TargetHttpProxy {
  return new TargetHttpProxy('remix-loadbalancer-target-proxy', {
    name: 'remix-loadbalancer-target-proxy',
    project: 'holmok-remix-project',
    urlMap: urlMap.selfLink
  }, { dependsOn: [urlMap] })
}
