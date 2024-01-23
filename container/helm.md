---
title: Helm
category: Container
layout: 2017/sheet
updated: 2024-01-23
keywords:
    - "helm"
    - "helm package manager"
intro: |
  Helm Cheat sheet
---

Shortcuts
---------
{: .-one-column}

### Handy helm commands

| `helm create hello-world` | Create a Helm chart (contain deployment.yml and serivce.yml) |
| `helm list` | List installed releases |
| `helm list --tiller-namespace [namespace]` | List installed releases for that namespace |
| `helm history --tiller-namespace [namespace] [project name]` | List all releases for that app in a namespace |
| `helm rollback --tiller-namespace [namespace] [project name] [revision]` | Rollback an app in a namespace to a specific version|
| `helmfile --selector app=[name] sync --args --recreate-pods` | Pod recreation for an app, with downtime |
| `helmfile --selector app=[name] sync` | Restart an app without down time, hot swap |
| `helm upgrade --namespace=[namespace] --wait --install [release/service name] -i [chart name]` | Upgrade a release and waiting til deployment is done |
| `helm install [release/service name] -i [chart name]` | Install a release |
| `helm install [release/service name] --dry-run --debug` | Dynamic dry run a release |
| `helm template [chart name]` | Static dry run |
| `helm status [release/service name]` | Show the status |
| `helm get all [release/service name]` | Get all details |
| `helm uninstall [release/service name]` | Uninstall a chart |
| `helm get manifesti [release/service name]` | Shows K8s objects created by the chart |
| `helm install --set service.name = xyz` | Override a value of values.yaml file |
| `helm install --set service.labels[0].name = xyz` | Override an array element value of values.yml file |
| `{{.Files.Get config.ini}}` | Read value from an external file |
| `helm package [chart name]` | Create a compressed `.tgz` helm package |
| `helm repo list` | List helm repositories |
| `helm repo add [repo name] [repo url]` | Add a repository to helm |
| `helm repo remove [repo name]` | Remove a repository |
| `helm search repo [chart name]` | Search for a chart |
| `helm inspect [chart name]` | See a helm doc |
| `helm fetch [chart name]` | Download a chart |
| `helm lint [chart path]` | Lint a Helm char |

### Predefiend directives

```bash
- {{.Release}} # {{.Release.Name}}
- {{.Chart}} # {{.Chart.Name}}
- {{.Capabilities}} # {{.Capabilities.KubeVersion}}
```

- `values.yml` diretive doesn't support `-` use `_` instead.
- `values.yml` diretive substitudes `1.0` or `2.0` with `1` and `2`, use `"1.0"` or `"2.0"`.

### Function and Pipeline

List of functions from Sprig

#### Functions

| `default default_value value # == default(default_value, value)` | Default value |
| `quote value` | Wrap a value in quote |
| `upper value` | Uppercase a value |
| `trunc value 63` | Truncate a value to 63 chars |
| `b64enc value` | Base64 encode |
| `toYaml value` | Convert a value to Yaml |
| `indent 6 .Values.Name` | Indents a value in Yaml |

#### Pipes

| `value | default default_value` | Default value |
| `value | quote` | Wrap a value in quote |
| `value | upper` | Uppercase a value |
| `value | trunc 63` | Truncate a value to 63 chars |
| `value | b64enc` | Base64 encode |
| `value | toYaml` | Convert a value to Yaml |

```bash
app.kubernetes.io/name: {{.Values.service.name | default .Chart.Name }}
# if value doesn't exist use the default chart name for it
```

### `With` keyword

To limit scope and avoid rewritting  `.Values` again and again,

```yaml
spec:
  {{ with .Values.service -}}
  type: {{ .type }}
  ports:
    - port: {{ .port }}
  {{-end }}
```
instead of

```yaml
spec:
  type: {{ .Values.service.type }}
  ports: {{ .Values.service.port }}
```

**Note:** the `-` removes an enter before directive if it's added before begining  of the directive. If added at the end of directive, it removes an enter after directive if it's placed at the end of directive.

### Logical operators

| `eq .Val1 .Val2` | Equal |
| `ne .Val1 .Val2` | Not equal |
| `gt .Val1 .Val2` | Greater than |
| `lt .Val1 .Val2` | Less than |
| `or .Val1 .Val2` | Or |
| `and .Val1 .Val2` | And |
| `not .Val1` | Not |

### Conditions

```yaml
{{- if .Values.Service.Name -}}
{{.Values.Service.Name}}
{{ - else - }}
{{.Chart.Name}}
{{- end -}}
```

### Loop

Useful to read array in Yaml file

```yaml
{{ - range paths }}
- path: {{ .path }}
  backend:
    serviceName: {{ .service }}
{{-end}}
```

### Define a variable

```yaml
{{ $hostName := .Values.HostName }}

spec:
  name: {{ $hostName }}
```

### Notes

- `charts` directory can host sub/child charts.

### Reference

[https://gist.github.com/tuannvm/4e1bcc993f683ee275ed36e67c30ac49](https://gist.github.com/tuannvm/4e1bcc993f683ee275ed36e67c30ac49)
[Helm functions](http://masterminds.github.io/sprig)
