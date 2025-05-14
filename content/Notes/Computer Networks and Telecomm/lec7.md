---
created: 2024-09-19T13:31
updated: 2024-09-19T14:25
---
# Lecture 7: Principles of reliable data transfer 

1. Challenge that a reliable data transfer protocol faces - A basic version 
2. Principle Protocols 
3. GBN and SR (time permits) 

![[20240919-1428-01_Pasted image 20240919134751.png]]

# Stop and wait

Need a realiable data transfer protocol (TCP) on top of an unreliable end to end network layer (IP) 
## 1. data packets can be corrupted

#### Mechanism
ACK. Acknowledge 
- (ACK/NAK) (positive/negative)
- ARQ: **Automatic Repeat reQuest**
retransmit

## 2. ACK and NAK can be corrupted as well  

-> Resend the current pkt (packet) when a corrupted ACK/NAK is received 

#### Problem: "Duplicate pkts" 

To let the receiver know whether a pkt is new or just a retransmission 

#### Introduce "Sequence number" SN to solve this problem 

A one-bit SN is enough

##### Does ACK/NAK need a SN at this point?  
At this point, we don't need one. 

don't even need NAK. 
In implementation, if the data pkt is corrupted, just ACK the previously corrupted one

![[20240919-1429-25_Pasted image 20240919140127.png]]

## 3. pkts may be lost

How to detect a pkt (or ACK) loss? 
- Didn't receive ACK after a period of time
- wait long enough to be sure 

### But how long? 

depending on knowledge of the channel and efficiency considerations. 

### Solution
choose a time value
- if ACK is not received within the time frame. Retransmit the pkt. 

#### What about duplicated pkts/ACKs? 

dealt with SN already

# Pipeline Protocol 

link bandwidth $R$
pkt size $L$ 
**Round-Trip Time** $RTT$
$$
\text{utilization} = \frac{L/R}{L/R + RTT}
$$
e.g.
pkt size $L$ ~ 10k  bits 
R = 16 bit/s 
1500 kilometers RTT = 10 ms 
=> utilization = 0.1% 

> **Upper layer protocols can affect the rate provided by the lower physical layers** 

## Q : How many pkts (data) should the sender send until it gets an ACK to achieve 100% efficiency 

N: number of packet
R: bandwidth 
RTT: delay
$$
\frac{N L}{R \cdot RTT} = 1
$$
NL is the amount of data we should send. 



SN needs to be able to differentiate $N$ packets in fly. 

