import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Paperclip, Bot, User, File as FileIcon, Image as ImageIcon, ArrowUp, Trash2, CheckCircle2, Loader2 } from 'lucide-react';

interface DeploymentChatProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  files?: File[];
  timestamp: Date;
}

const steps = [
  { number: "01", title: "Tell Us What You Need", description: "Describe your detection goals and hardware constraints." },
  { number: "02", title: "Upload Your Data", description: "Upload 10-50 sample images for lighting and complexity analysis." },
  { number: "03", title: "Review Recommendations", description: "Verify the AI-suggested model architecture and latency." },
  { number: "04", title: "Automated Training", description: "Wait while we train and optimize your model." },
  { number: "05", title: "Receive Package", description: "Download your Docker container and deployment script." },
];

export const DeploymentChat: React.FC<DeploymentChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [objectUrls, setObjectUrls] = useState<Record<string, string>>({});

  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus();
    }
    // Reset state when opened fresh
    if (!isOpen) {
      setTimeout(() => {
        setMessages([]);
        setHasStarted(false);
        setInput('');
        setSelectedFiles([]);
        setCurrentStep(0);
      }, 500);
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Manage object URLs for previews to avoid memory leaks
  useEffect(() => {
    const newUrls: Record<string, string> = {};
    selectedFiles.forEach(file => {
      if (file.type.startsWith('image/')) {
        newUrls[file.name] = URL.createObjectURL(file);
      }
    });
    setObjectUrls(newUrls);
    
    return () => {
      Object.values(newUrls).forEach(url => URL.revokeObjectURL(url));
    };
  }, [selectedFiles]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFiles(prev => [...prev, ...Array.from(e.target.files || [])]);
      if (fileInputRef.current) fileInputRef.current.value = ''; // Reset to allow same file selection
      textareaRef.current?.focus();
    }
  };

  const removeFile = (indexToRemove: number) => {
    setSelectedFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleSend = async () => {
    if ((!input.trim() && selectedFiles.length === 0) || isTyping) return;

    if (!hasStarted) setHasStarted(true);

    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      files: [...selectedFiles], // Copy array
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    const sentFilesCount = selectedFiles.length;
    
    setInput('');
    setSelectedFiles([]);
    setIsTyping(true);

    // Logic to advance steps based on context
    let nextStep = currentStep;
    if (currentStep === 0) {
       nextStep = 1; // Move to Upload after initial description
    } else if (currentStep === 1 && sentFilesCount > 0) {
       nextStep = 2; // Move to Review after upload
    } else if (currentStep === 2) {
       nextStep = 3;
    }

    // Simulate processing delay and bot response
    setTimeout(() => {
      let botContent = "";
      
      if (currentStep === 0) {
         botContent = "I've analyzed your requirements. To ensure the best accuracy for your hardware, I need to analyze some sample data.\n\nPlease upload 10-50 representative images from your environment so I can check lighting and occlusion.";
      } else if (currentStep === 1 && sentFilesCount > 0) {
         botContent = `Received ${sentFilesCount} images. I'm analyzing the lighting conditions and object complexity...\n\nBased on this, I recommend the YOLOv8-Nano architecture optimized with TensorRT. It fits your Jetson Orin latency budget of <30ms.`;
      } else if (currentStep === 1 && sentFilesCount === 0) {
         botContent = "I still need those sample images to proceed with the hardware optimization analysis. Please upload them when you're ready.";
         nextStep = 1; // Stay on upload
      } else if (currentStep === 2) {
         botContent = "Understood. I'm initializing the training cluster now. This usually takes about 4 hours. You'll receive an alert when the Docker container is ready for download.";
      } else {
         botContent = "I'm generating the deployment package now. This includes the inference server and the monitoring dashboard.";
      }

      setCurrentStep(nextStep);

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: botContent,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-white/95 dark:bg-[#020617]/95 backdrop-blur-xl flex flex-col"
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-all"
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Chat History */}
          <div className={`flex-1 w-full max-w-4xl mx-auto overflow-y-auto no-scrollbar relative transition-all duration-500 ${hasStarted ? 'pt-24 pb-64 px-6 opacity-100' : 'opacity-0 h-0'}`}>
             {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-6 mb-8 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  {/* Avatar */}
                  <div className={`w-10 h-10 rounded-2xl flex-shrink-0 flex items-center justify-center ${
                    msg.role === 'assistant' 
                      ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20' 
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    {msg.role === 'assistant' ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} max-w-[80%]`}>
                    <div className={`text-lg md:text-xl leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user' 
                        ? 'text-slate-900 dark:text-white text-right font-medium' 
                        : 'text-slate-600 dark:text-slate-300'
                    }`}>
                      {msg.content}
                    </div>

                    {msg.files && msg.files.length > 0 && (
                      <div className={`mt-4 grid grid-cols-2 gap-2 ${msg.role === 'user' ? 'justify-items-end' : ''}`}>
                        {msg.files.map((file, i) => (
                           <div key={i} className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-white/10 w-full max-w-xs">
                              <div className="p-2 bg-white dark:bg-slate-900 rounded-lg flex-shrink-0">
                                {file.type.startsWith('image/') ? <ImageIcon className="w-4 h-4 text-blue-500" /> : <FileIcon className="w-4 h-4 text-blue-500" />}
                              </div>
                              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">{file.name}</span>
                           </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
             ))}
             
             {isTyping && (
               <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center gap-1 h-10">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
               </div>
             )}
             <div ref={messagesEndRef} />
          </div>

          {/* Global Input Area */}
          <motion.div 
            layout
            className={`w-full max-w-3xl mx-auto px-6 transition-all duration-500 ${hasStarted ? 'fixed bottom-8 left-0 right-0 z-50' : 'flex-1 flex flex-col justify-center mb-0'}`}
          >
            
            {/* Current Step Indicator - Positioned right above the input box */}
            <motion.div 
              layout
              className="mb-4 flex items-center justify-between px-2"
            >
               <div className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shadow-lg shadow-blue-600/20">
                    {steps[currentStep].number}
                  </span>
                  <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Current Step</span>
               </div>
               <div className="hidden md:block h-px flex-1 bg-slate-200 dark:bg-white/10 mx-4"></div>
               <div className="text-sm text-slate-400 dark:text-slate-500">
                 {currentStep + 1} of {steps.length}
               </div>
            </motion.div>

            <motion.div layout className="relative group">
              {/* Glowing backdrop */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-[32px] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 ${hasStarted ? 'opacity-10' : 'opacity-30'}`}></div>
              
              <div className="relative bg-white dark:bg-[#0B1120] rounded-[30px] shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden">
                
                {/* Step Title & Description - Inside top of box for context */}
                <div className="px-6 pt-5 pb-2">
                   <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      {steps[currentStep].title}
                      {currentStep > 0 && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                   </h3>
                   <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {steps[currentStep].description}
                   </p>
                </div>

                {/* File Preview Strip */}
                <AnimatePresence>
                  {selectedFiles.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pt-4 pb-2"
                    >
                      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                         {selectedFiles.map((file, index) => (
                             <motion.div 
                                key={`${file.name}-${index}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="relative flex-shrink-0 group/file"
                             >
                                <div className="w-20 h-20 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden bg-slate-50 dark:bg-slate-900 relative">
                                   {objectUrls[file.name] ? (
                                      <img src={objectUrls[file.name]} alt="Preview" className="w-full h-full object-cover" />
                                   ) : (
                                      <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                                         <FileIcon className="w-8 h-8 mb-1" />
                                         <span className="text-[8px] px-1 truncate max-w-full">{file.name.split('.').pop()}</span>
                                      </div>
                                   )}
                                   
                                   {/* Overlay for non-images to read name better or just hover effect */}
                                   <div className="absolute inset-0 bg-black/0 group-hover/file:bg-black/10 transition-colors" />
                                </div>
                                
                                <button 
                                  onClick={() => removeFile(index)}
                                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md opacity-0 group-hover/file:opacity-100 transition-opacity scale-75 hover:scale-100"
                                >
                                   <X className="w-3 h-3" />
                                </button>
                             </motion.div>
                         ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Main Input Row */}
                <div className="flex items-end p-4 gap-3">
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    className="hidden"
                    multiple
                  />
                  
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="p-3.5 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors flex-shrink-0"
                    title="Attach files"
                  >
                    <Paperclip className="w-6 h-6" />
                  </button>

                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    placeholder={currentStep === 1 ? "Upload images or describe your data..." : "Type a message..."}
                    rows={1}
                    className="flex-1 bg-transparent border-none focus:ring-0 text-xl md:text-xl text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600 resize-none py-3 max-h-48 scrollbar-hide font-light"
                    style={{ minHeight: '56px' }}
                  />

                  <button 
                    onClick={handleSend}
                    disabled={(!input.trim() && selectedFiles.length === 0) || isTyping}
                    className={`p-3.5 rounded-2xl flex-shrink-0 transition-all duration-300 ${
                      (input.trim() || selectedFiles.length > 0) && !isTyping
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600'
                    }`}
                  >
                    {hasStarted ? <ArrowUp className="w-6 h-6" /> : <Send className="w-6 h-6 ml-0.5" />}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};