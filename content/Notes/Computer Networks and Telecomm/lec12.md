# Lecture 12: IP and Router (Continued) 

1. Dynamical Host Configuration Protocol (DHCP) 
	1. which assign IP to a network device in the local network 
2. Network Address Translation 
3. Modular Router Design 

e.g. 
10.49.1.95 
Renew DHCP lease 

# DHCP 

Common Port Number **Port 67**
Happened on Network Layer
Could have multiple DHCP and multiple handshakes 

![[20241010-1356-09_Pasted image 20241010135607.png|293]]


```markdown 
1. broadcast destination 

IP 255.255.255.255
source IP address: 0.0.0.0

2. DHCP makes an offer 
   
Source IP: Its own IP 
Destination IP: 255.255.255.255

3. accept 

4. ACK
```

# Network Address Translation (NAT)

![[20241010-1352-52_Pasted image 20241010135250.png|613]]

```markdown 
1. S_IP: IP_private		S_port: X
   D_IP: IP_server		D_port: 80
2. S_IP: IP_public		f(IP_private, X)
   D_IP: IP_server		D_port: 80
3. S_IP: IP_server		port: 80
   D_IP: IP_public		f(IP_private, X)
4. S_IP: IP_server		port: 80
   D_IP: IP_private		port: X
```

Use port number to specify the device that send out the request. 

| private              | public                 |
| -------------------- | ---------------------- |
| IP_private<br>port X | IP_public<br>port f(X) |

Finished Chapter 4 

--- 

# Modular Router Design 

## How to build large routers from smaller ones 

A route is strictly nonblocking (SNB) if any new connection from a free input link to a free output link can be made without affecting ongoing connections. 

![[20241010-1416-57_Pasted image 20241010141655.png|240]]
## A Clos Network 

![[20241010-1419-31_IMG_0017.jpeg]]
$$
(IN, N_1, N_2, N_3, OUT) 
= (3, 3, 5, 4, 2)
$$
Thm: A Clos network built from SNB blocks is itself SNB iff $N_2 \geq IN + OUT - 1$. 

### Proof  

A new connection is needed between A and B. 

A can have at most $IN - 1$ input links busy
B can have at most $OUT - 1$ output links busy 

Together, they use at most $IN + OUT - 2$ middle nodes. 

So, there is at least one middle node can be used for the new connection. 

### Example 

Without using $N_2$ middle layer,
IN=5, OUT=6, needs $IN * N_1 * N_3 * OUT$ crossbars

With $N_2 = 10$, 
$IN * N_2 * N_1 + OUT * N_2 * N_3 + N_2 * N_1 * N_3$ 

