---
dg-publish: true
---
# The Atoms of Computation

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)

## Metadata
- Author: [[community.qiskit.org]]
- Full Title: The Atoms of Computation
- Category: #articles
- URL: https://community.qiskit.org/textbook/ch-states/atoms-computation.html

## Highlights
- Programming a quantum computer is now something that anyone can do in the comfort of their own home.
- expressed in a way that emphasizes the powers of ten
- using the two characters 0 and 1 to express numbers as multiples of powers of two
- For any letter, number, or punctuation mark you want to use, you can find a corresponding string of at most eight bits using this table.
- Like our standard digital computers, quantum computers are based on this same basic idea. The main difference is that they use qubits, an extension of the bit to quantum mechanics.
- we just use qubits as if they were bits.
- If you have nnn bits, how many different states can they be in?
- circuit diagram.
- These have inputs on the left, outputs on the right, and operations represented by arcane symbols in between. These operations are called 'gates'
- First, encode the input, then do some actual computation, and finally extract an output.
- QuantumCircuit takes the number of qubits in the quantum circuit as an argument.
- The extraction of outputs in a quantum circuit is done using an operation called measure_all().
- The command qc_output.measure_all() adds a measurement to each qubit in the circuit qc_output, and also adds some classical bits to write the output to.
- Since we don't do anything to our qubits in the circuit above, this is exactly the result we'll get when we measure them.
- this result comes from a quantum simulator,
- which is a standard computer calculating what an ideal quantum computer would do
- Simulations are only possible for small numbers of qubits (~30 qubits)
- a NOT gate
- an operation called x
- This is applied to a pair of qubits. One acts as the control qubit (this is the one with the little dot). The other acts as the target qubit (with the big circle that has a + inside it).
- One is to say that it looks at its two input bits to see whether they are the same or different.
- Next, it overwrites the target qubit with the answer
- The target becomes 0 if they are the same, and 1 if they are different.
- Another way of explaining the CNOT is to say that it does a NOT on the target if the control is 1, and does nothing otherwise.
- The CNOT calculates whether the input values are different and finds that they are, which means that it wants to output 1. It does this by writing over the state of qubit 1 (which, remember, is on the left of the bit string), turning 01 into 11.
- The bit we flipped, which comes from qubit 7, lives on the far left of the string. This is because Qiskit numbers the bits in a string from right to left.
- Qiskit's system certainly has its advantages when we are using the bits to represent numbers.
- the principles behind all algorithms
- Whether the algorithm is designed to solve mathematical problems or process text or images, we always break big tasks down into small and simple steps.
- In fact, everything left so far is something we already know how to do. This is because, if you break everything down into adding just two bits, there are only four possible things you’ll ever need to calculate. Here are the four basic sums (we’ll write all the answers with two bits to be consistent).
  0+0 = 00 (in decimal, this is 0+0=0)
  0+1 = 01 (in decimal, this is 0+1=1)
  1+0 = 01 (in decimal, this is 1+0=1)
  1+1 = 10 (in decimal, this is 1+1=2)
- half adder.
- They are made by using the barrier command.
- logic gates
- To see what we need, let’s take another look at what our half adder needs to do.
  0+0 = 00
  0+1 = 01
  1+0 = 01
  1+1 = 10
- The rightmost bit in all four of these answers is completely determined by whether the two bits we are adding are the same or different. So for 0+0 and 1+1, where the two bits are equal, the rightmost bit of the answer comes out 0
- For 0+1 and 1+0, where we are adding different bit values, the rightmost bit is 1.
- XOR gate.
- controlled-NOT gate.
- CNOT
- we want to write the result on a different pair of qubits.
- If you look again at the four possible sums, you’ll notice that there is only one case for which this is 1 instead of 0: 1+1=10. It happens only when both the bits we are adding are 1.
- For this, we need a new gate: like a CNOT but controlled on two qubits instead of just one. This will perform a NOT on the target qubit only when both controls are in state 1. This new gate is called the Toffoli. For those of you who are familiar with Boolean logic gates, it is basically an AND gate.
