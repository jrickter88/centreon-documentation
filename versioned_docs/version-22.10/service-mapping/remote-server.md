---
id: remote-server
title: Install on a remote server
---

The procedure for installing the Centreon BAM module on a Centreon remote server
is the same as on a central server and needs additionnal action.

1.  Install the extension using the standard install procedure
2.  Follow the extra steps described below.

## Step 2: Configure Centreon Broker

The **Centreon BAM** module needs specific Broker outputs to be configured for the Centreon remote server.

To do so, you need to log in to your central server and modify the Centreon Broker Master configuration of the
Centreon remote poller. Go to the **Configuration > Pollers > Broker
configuration** menu and edit the **remote server's** configuration.

### Monitoring output

In the **Output** tab, select **BAM - Monitoring engine (BAM)** and click on
**Add**:

![image](../assets/service-mapping/remote-server/conf_poller_bam_monitoring.png)

Please refer to the following table for the appropriate field values:

| Fields                          | Values                                                                 |
|---------------------------------|------------------------------------------------------------------------|
| Name                            | remote-server-bam-monitoring                                           |
| Filter category                 | *None*                                                                 |
| Storage DB Name                 | centreon\_storage                                                      |
| Cache                           | No                                                                     |
| Replication enabled             | No                                                                     |
| Command file path               | /var/lib/centreon-engine/rw/centengine.cmd                             |
| DB host                         | localhost                                                              |
| DB name                         | centreon                                                               |
| DB password                     | *Retrieve it from /etc/centreon/conf.pm on the Centreon Remote Server* |
| DB port                         | 3306                                                                   |
| DB type                         | MySQL                                                                  |
| DB user                         | centreon                                                               |
| Maximum queries per transaction | 0                                                                      |
| Transaction commit timeout      | 5                                                                      |
| Retry interval                  | 5                                                                      |

### Reporting output

Select the **BAM - BI engine (BAM)** configuration type and click on **Add**:

![image](../assets/service-mapping/remote-server/conf_poller_bam_reporting.png)

Please refer to the following table for the appropriate field values:

| Fields                          | Values                                                                 |
|---------------------------------|------------------------------------------------------------------------|
| Name                            | remote-server-bam-reporting                                            |
| Filter category                 | BAM                                                                    |
| Replication enabled             | No                                                                     |
| DB host                         | localhost                                                              |
| DB name                         | centreon\_storage                                                      |
| DB password                     | *Retrieve it from /etc/centreon/conf.pm on the Centreon Remote Server* |
| DB port                         | 3306                                                                   |
| DB type                         | MySQL                                                                  |
| DB user                         | centreon                                                               |
| Maximum queries per transaction | 0                                                                      |
| Transaction commit timeout      | 5                                                                      |
| Retry interval                  | 5                                                                      |

To complete the installation process, generate and deploy the Centreon remote
server configuration by selecting **Restart**.
