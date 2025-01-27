---
id: applications-protocol-ftp
title: FTP Server
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **FTP Server** brings a host template:

* **App-Protocol-FTP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Protocol-FTP-custom" label="App-Protocol-FTP-custom">

| Service Alias | Service Template              | Service Description                                                |
|:--------------|:------------------------------|:-------------------------------------------------------------------|
| FTP-Login     | App-Protocol-FTP-Login-custom | Check connection on a remote FTP server with username and password |

> The services listed above are created automatically when the **App-Protocol-FTP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias  | Service Template                   | Service Description                                                              |
|:---------------|:-----------------------------------|:---------------------------------------------------------------------------------|
| FTP-Commands   | App-Protocol-FTP-Commands-custom   | Check  the execution of several commands on a remote FTP server                          |
| FTP-Date       | App-Protocol-FTP-Date-custom       | Check date of files within a directory or a specific file on a remote FTP Server |
| FTP-FilesCount | App-Protocol-FTP-FilesCount-custom | Count files on a remote FTP directory                                            |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="FTP-Commands" label="FTP-Commands">

For this specific service template, the names of the metrics depend on the configuration made by the user.

</TabItem>
<TabItem value="FTP-Date" label="FTP-Date">

| Métrique   | Unité |
|:-----------|:------|
| files#list | N/A   |

</TabItem>
<TabItem value="FTP-FilesCount" label="FTP-FilesCount">

| Métrique    | Unité |
|:------------|:------|
| files       | N/A   |

</TabItem>
<TabItem value="FTP-Login" label="FTP-Login">

| Métrique | Unité |
|:---------|:------|
| time     | N/A   |

</TabItem>
</Tabs>

## Prerequisites

The plugin will need a username and password to connect to the FTP share.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-protocol-ftp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-protocol-ftp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-protocol-ftp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-protocol-ftp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **FTP Server** connector through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Protocol-Ftp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Protocol-Ftp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-protocol-ftp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Protocol-Ftp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Protocol-FTP-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                              | Default value     | Mandatory   |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FTPUSERNAME     | Specify username for authentication.                                                                                                   |                   |             |
| FTPPASSWORD     | Specify password for authentication.                                                                                                   |                   |             |
| FTPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="FTP-Commands" label="FTP-Commands">

| Macro        | Description                                                                                                                                                                          | Default value     | Mandatory   |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FTPCOMMAND   | Set command to test. (can be : binary; ascii; cwd,DIR; rmdir,DIR; mdkir,DIR; ls,DIR; rename,OLDNAME,NEWNAME; delete,FILENAME; get,REMOTE_FILE,LOCAL_FILE; put,LOCAL_FILE,REMOTE_FILE | cwd,DIR           |             |
| CRITICAL     | Threshold.                                                                                                                                                                           |                   |             |
| WARNING      | Threshold.                                                                                                                                                                           |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                               |                   |             |

</TabItem>
<TabItem value="FTP-Date" label="FTP-Date">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DIRECTORY    | Check files in the directory (no recursion).                                                                                           |                   |             |
| CRITICAL     | Critical threshold in seconds for each files (diff time).                                                                              |                   |             |
| WARNING      | Warning threshold in seconds for each files (diff time).                                                                               |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="FTP-FilesCount" label="FTP-FilesCount">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DIRECTORY    | Check files in the directory (multiple option).                                                                                        |                   |             |
| WARNING      | Warning threshold (number of files).                                                                                                   |                   |             |
| CRITICAL     | Critical threshold (number of files).                                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="FTP-Login" label="FTP-Login">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Critical threshold in seconds.                                                                                                         |                   |             |
| WARNING      | Warning threshold in seconds.                                                                                                          |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_protocol_ftp.pl \
	--plugin=apps::protocols::ftp::plugin \
	--mode=login \
	--hostname=10.0.0.1  \
	--username='username' \
	--password=password' \
	--warning='' \
	--critical='' 
```

The expected command output is shown below:

```bash
OK: Response time 0.024  | 'time'=0.024;;;;

```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_ftp.pl \
	--plugin=apps::protocols::ftp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                     | Linked service template            |
|:-------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|
| commands [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/ftp/mode/commands.pm)]     | App-Protocol-FTP-Commands-custom   |
| date [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/ftp/mode/date.pm)]             | App-Protocol-FTP-Date-custom       |
| filescount [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/ftp/mode/filescount.pm)] | App-Protocol-FTP-FilesCount-custom |
| login [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/ftp/mode/login.pm)]           | App-Protocol-FTP-Login-custom      |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="FTP-Commands" label="FTP-Commands">

| Option        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname    | IP Addr/FQDN of the ftp host                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --port        | Port used                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --ssl         | Use SSL connection Need Perl 'Net::FTPSSL' module                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --ftp-options | Add custom ftp options. Example: --ftp-options='Debug=1" --ftp-options='useSSL=1'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --username    | Specify username for authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --password    | Specify password for authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --timeout     | Connection timeout in seconds (default: 30)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --warning     | Warning threshold in seconds                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --critical    | Critical threshold in seconds                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --ftp-command | Set command to test (can be multiple). It will be executed in the order and stop on first command problem. Following commands can be used:  binary          Transfer file in binary mode.  ascii           Transfer file in ascii mode.  cwd,DIR         Attempt to change directory to the directory     given in DIR. If no directory is given then an     attempt is made to change the directory to the     root directory.  rmdir,DIR       Remove the directory with the name DIR.  mkdir,DIR       Create a new directory with the name DIR.  ls,DIR          Get a directory listing of DIR, or the current     directory.  rename,OLDNAME,NEWNAME     Rename a file on the remote FTP server from     OLDNAME to NEWNAME.  delete,FILENAME Send a request to the server to delete FILENAME.  get,REMOTE\_FILE,LOCAL\_FILE     Get REMOTE\_FILE from the server and store     locally.  put,LOCAL\_FILE,REMOTE\_FILE     Put a file on the remote server.    |

</TabItem>
<TabItem value="FTP-Date" label="FTP-Date">

| Option        | Description                                                                         |
|:--------------|:------------------------------------------------------------------------------------|
| --hostname    | IP Addr/FQDN of the ftp host                                                        |
| --port        | Port used                                                                           |
| --ssl         | Use SSL connection Need Perl 'Net::FTPSSL' module                                   |
| --ftp-options | Add custom ftp options. Example: --ftp-options='Debug=1" --ftp-options='useSSL=1'   |
| --username    | Specify username for authentication                                               |
| --password    | Specify password for authentication                                               |
| --timeout     | Connection timeout in seconds (default: 30)                                         |
| --warning     | Warning threshold in seconds for each files (diff time)                             |
| --critical    | Critical threshold in seconds for each files (diff time)                            |
| --directory   | Check files in the directory (no recursive) (multiple option)                       |
| --file        | Check file (multiple option)                                                        |
| --timezone    | Set the timezone of display date. Can use format: 'Europe/London' or '+0100'.       |

</TabItem>
<TabItem value="FTP-FilesCount" label="FTP-FilesCount">

| Option        | Description                                                                         |
|:--------------|:------------------------------------------------------------------------------------|
| --hostname    | IP Addr/FQDN of the ftp host                                                        |
| --port        | Port used                                                                           |
| --ssl         | Use SSL connection Need Perl 'Net::FTPSSL' module                                   |
| --ftp-options | Add custom ftp options. Example: --ftp-options='Debug=1" --ftp-options='useSSL=1'   |
| --username    | Specify username for authentication                                               |
| --password    | Specify password for authentication                                               |
| --timeout     | Connection timeout in seconds (default: 30)                                         |
| --warning     | Warning threshold (number of files)                                                 |
| --critical    | Critical threshold (number of files)                                                |
| --directory   | Check files in the directory (multiple option)                                      |
| --max-depth   | Don't check fewer levels (default: '0'. Means current dir only).                    |
| --filter-file | Filter files (can be a regexp. Directory is in the name).                           |

</TabItem>
<TabItem value="FTP-Login" label="FTP-Login">

| Option        | Description                                                                         |
|:--------------|:------------------------------------------------------------------------------------|
| --hostname    | IP Addr/FQDN of the ftp host                                                        |
| --port        | Port used                                                                           |
| --ssl         | Use SSL connection Need Perl 'Net::FTPSSL' module                                   |
| --ftp-options | Add custom ftp options. Example: --ftp-options='Debug=1" --ftp-options='useSSL=1'   |
| --username    | Specify username for authentication                                               |
| --password    | Specify password for authentication                                               |
| --timeout     | Connection timeout in seconds (default: 30)                                         |
| --warning     | Warning threshold in seconds                                                        |
| --critical    | Critical threshold in seconds                                                       |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_ftp.pl \
	--plugin=apps::protocols::ftp::plugin \
	--mode=login \
	--help
```
