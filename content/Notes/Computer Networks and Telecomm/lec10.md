# Lecture 10 Packet Forwarding and Scheduling 

```
0 Fairness among TCP flows 
1 Two main functions of the network layer 
2 Scheduling 
```

# Fairness among TCP Flows

![[20241001-1344-35_Pasted image 20241001134434.png]]

# Two main functions of network layers

![[20241001-1347-42_Pasted image 20241001134740.png]]

A typical network routing graph. 

## Routing 

Determines the route (path) for a pkt from its source to its destination. (Global Function) 

### The decision is made at each node locally. 

Realized by forwarding locally using forwarding table. 

## Forwarding 

moves a pkt from an input lack of a router to the appropriate output link.  (Local Function) 

### Forwarding Table 

Using the value of a field in the pkt's header to index into the ==forwarding table==. 

![[20241001-1353-53_Pasted image 20241001135351.png|258]]

| header value | Output Link |
| ------------ | ----------- |
| 0001         | 1           |
| 0010         | 3           |
| 0011         | 2           |

#### Prefix (IP) matching 

##### Longest Prefix Matching

Prefix matching is a technique used to determine the longest matching prefix in an IP address, allowing routers to efficiently route packets based on the most specific network address.

> [!example]
> 010 000 000 ... 010 000 111 -> Link 1 
> - Prefix 010 000 
> 010 000 000 ... 010 111 111 -> Link 2 
> - Prefix 010
> 
> For 010 000 010, it should go through Link 1. 
> 

# What is inside a router 

![[20241001-1409-03_Pasted image 20241001140901.png|431]] 

![[20241001-1409-35_Pasted image 20241001140933.png|448]]

bottleneck link 

Federal Communication Commission (FCC) 
- We need Net Neutrality 
	- Feb 2015 Yes 
	- Oct 2018 No 

## What is Net Neutrality? 

What if the switch is congested? What packet goes first? 
- Traditionally, FIFO 
	- Net Neutrality: All pkts follow FIFO, no priority 

For the above example: 
- Zoom call needs to ensure the video call quality 
	- It should have priority and disregard the net neutrality 
- FTP just needs to finish downloading in a reasonable time 
	- It can tolerate delays 

> [!ai]
> What is differential service? 
> Differential service is a network architecture that provides different levels of service quality to various types of traffic, allowing for prioritization based on the needs of applications, such as giving higher priority to real-time communications over less time-sensitive data transfers.

## 1 Distinguish multimedia traffic pkts and elastic traffic 

Technology already here. The type of service (ToS) field in IP header. 

## 2 A certain degree of isolation among classes 

![[Pasted image 20241001142204.png|500]]

If the multimedia get all the bandwidth, than elastic services need to wait forever until multimedia is stop playing. So we need to have a mechanism such as send 5 pkts of multimedia, then send one elastic pkt. 

## 3 Use bandwidth as efficient as possible 

We want to keep the link busy unless all demands become zero. 

# Scheduling Solutions 

|                                   | FIFO | Priority Queuing (Non-preemptive)                                        |
| --------------------------------- | ---- | ------------------------------------------------------------------------ |
|                                   |      | Transmit pkt from lower class only if the queue for high class is empty. |
|                                   |      | ![[Pasted image 20241001143124.png\|300]]                                |
| Diff Serv (Differential Services) | NO   | YES                                                                      |
| Isolation                         | NO   | NO                                                                       |
| Efficiency                        | YES  | Yes                                                                      |


