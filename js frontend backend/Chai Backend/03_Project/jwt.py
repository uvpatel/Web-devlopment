import os
secret = os.urandom(32).hex() # Generates a 256-bit (32-byte) key
print(secret)