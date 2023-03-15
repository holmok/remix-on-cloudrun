import { Service } from '@pulumi/gcp/cloudrun'

export function CreateService (): Service {
  const revisionString = process.env.CIRCLE_BUILD_NUM ?? (new Date()).toISOString().replace('T', '-').replace(/:/g, '-').replace('.', '-').replace('Z', '')
  return new Service('remix-app', {
    location: 'us-central1',
    name: 'remix-app',
    template: {
      metadata: {
        annotations: {
          'autoscaling.knative.dev/maxScale': '2',
          'autoscaling.knative.dev/minScale': '1'
        },
        name: `remix-app-${revisionString}`
      },
      spec: {
        containers: [{
          image: `us.gcr.io/holmok-remix-project/remix-app:v${revisionString}`,
          ports: [{
            containerPort: 3000,
            name: 'http1'
          }],
          resources: {
            limits: {
              cpu: '1000m',
              memory: '512Mi'
            }
          }
        }],
        timeoutSeconds: 300
      }
    },
    traffics: [{
      latestRevision: true,
      percent: 100
    }]
  })
}
